class PostsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy, :like]
  before_action :set_post, only: [:show, :like]
  before_action :set_user_post, only: [:update, :destroy]

  # GET /posts
  def index
    @posts = Post.all
    # @posts = Post.includes(:comments)
    
    render json: @posts.as_json(include: { comments: { only: [:user_id, :content, :created_at] }, likes: {only: [:user_id, :post_id]} })
  end

  # GET /posts/1
  def show
    @post.likes.count
    render json: @post.as_json(include: { comments: { include: { user: { only: :username } } }, likes: {only: [:user_id, :post_id]}, user: {only: [:username] } })
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  # GET /user/:id/posts
  def get_user_posts
    @user_posts = User.find(params[:id]).posts

    render json: @user_posts.as_json(include: { comments: { only: [:user_id, :content, :created_at] }, likes: {only: [:user_id, :post_id]} })
  end

  def like
    @like = Like.create(user_id: @current_user.id, post_id: @post.id)

    render json: @like, status: :created
  end

  def trending
    @posts = Post.all
    @BoW = {}
    @posts.each do |post|
      words = post.content.split().concat post.title.split()
      words.each do |word|
        word = word.downcase
        if @BoW[word]
          @BoW[word] += 1
        else
          @BoW[word] = 1
        end
      end
    end

    temp = @BoW.sort_by { |key, val| -val }

    render json: temp
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    def set_user_post
      @post = @current_user.posts.find(params[:id])
    end


    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :content, :user_id)
    end
end
