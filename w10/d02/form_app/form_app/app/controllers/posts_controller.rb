class PostsController < ApplicationController
    def index
        @posts = Post.all
    end

    def new 
        @post = Post.new
    end

    def create
        # Post.create(title: params[:post][:title], content: params[:post][:content])
        Post.create(post_params)
        redirect_to new_post_path
    end


    private
    # Using a private method to encapsulate the permissible parameters is
    # a good pattern since you'll be able to reuse the same permit
    # list between create and update. Also, you can specialize this method
    # with per-user checking of permissible attributes.
    def post_params
      params.require(:post).permit(:title, :content)
    end
end
