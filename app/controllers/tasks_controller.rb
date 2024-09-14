class TasksController < ApplicationController

  before_action :set_task, only: [:show, :edit, :update, :destroy]
  
  def index
    if params[:year].present? && params[:week_number].present?
      @year = params["year"].to_i
      d = Date.new(@year, 1, 1)
      if (d.wday == 4 || d.leap? and d.wday == 3)
         num_weeks = 53
      else
         num_weeks = 52
      end
      @week_number = params["week_number"]
      if params["today"] == "true"
        @next_week_number = @week_number.to_i
      elsif params["next"] == "true"
        if num_weeks != @week_number.to_i
          @next_week_number = @week_number.to_i + 1
        end
        if num_weeks == @week_number.to_i
          @next_week_number = 1
          @back_week_number = @week_number
          @year = @year + 1
        end
      elsif params["back"] == "true"
        if 1 != @week_number.to_i
          @next_week_number = @week_number.to_i + 1
          @back_week_number = @week_number.to_i - 1
        end
        if 1 == @week_number.to_i
          d = Date.new(@year - 1, 1, 1)
          if (d.wday == 4 || d.leap? and d.wday == 3)
            last_num_weeks = 53
          else
            last_num_weeks = 52
          end
          @next_week_number = last_num_weeks
          @back_week_number = last_num_weeks
          @year = @year - 1
        end
        @next_week_number = @back_week_number
      end
    elsif params[:selected_date].present?
      selected_date = params["selected_date"].to_date
      @year = selected_date.cwyear
      @next_week_number = selected_date.strftime("%V").to_i
    else 
      @year = Date.today.cwyear
      @next_week_number = Time.now.strftime("%V").to_i
    end  
  end 
	
  def show
  end

  def new
    @task = Task.new
    respond_to do |format|
      format.html
      format.js
    end
  end

  def edit
  end

  def create
    @task = Task.new(task_params)
    respond_to do |format|
      if @task.save
        format.html { redirect_to @task, notice: 'Task was successfully created.' }
        format.json { render :show, status: :created, location: @task }
        format.js {}
      else
        format.html { render :new }
        format.json { render json: @task.errors, status: :unprocessable_entity }
        format.js {}
      end
    end
  end

  def update
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to @task, notice: 'Task was successfully updated.' }
        format.json { render :show, status: :ok, location: @task }
        format.js {}
      else
        format.html { render :edit }
        format.json { render json: @task.errors, status: :unprocessable_entity }
        format.js {}
      end
    end
  end

  def destroy
    @task.destroy
    respond_to do |format|
      format.html { redirect_to tasks_url, notice: 'Task was successfully destroyed.' }
      format.json { head :no_content }
      format.js {}
    end
  end

  private

    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:title,:start_time,:end_time,:user_id)
    end

end