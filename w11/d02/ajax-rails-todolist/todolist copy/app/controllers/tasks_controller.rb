class TasksController < ApplicationController

  # GET /tasks
  def index
    @tasks = Task.all
  end

  # GET /tasks/new
  def new
    @task = Task.new

  end

  # POST /tasks
  def create
    @new_task = Task.create(task_params)
  end

   # GET /tasks/1/edit
   def edit
    @task = Task.find(params[:id])
  end


  #POST /tasks/:id
  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
  end

  private
    def task_params
      params.require(:task).permit(:name, :status)
    end
end
