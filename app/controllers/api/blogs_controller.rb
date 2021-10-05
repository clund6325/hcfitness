class Api::BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :update, :destroy]

  def index
    render json: current_user.blogs
  end

  def show
    render json: @blog
  end

  def create
    @blog = current_user.blogs.new(blog_params)
    if @blog.save
      render json: @blog
    else
      render json: { errors: @blog.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: { errors: @blog.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @blog.destroy
    render json: { message: "Blog Deleted"}
  end

  private
    def set_blog
      @blog = current_user.blogs.find(params[:id])
    end
    
    def blog_params
      params.require(:blog).permit(:title, :category, :image)
    end

end
