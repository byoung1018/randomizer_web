class ListsController < ApplicationController
  def create
    # check current user for id
    list = List.new(owner_id: current_user.id, name: list_params[:name])
    list.save!
    list_params[:choices].each do |text|
      choice = Choice.new(owner_id: current_user.id, text: text)
      choice.save!
      ListItem.new(list_id: list.id, choice_id: choice.id).save!
    end
  end

  def new
    @choices = param_choices
  end

  def show
    @list = List.find(params[:id])
    @choices = @list.choices
  end

  def list_params
    params.require(:list).permit(:name, choices: [])
  end

  def index
    @lists = current_user.lists
  end

  def param_choices
    return [Choice.new(text: '')] unless params[:choices]

    params[:choices].split(/\, | or /).
      map do |choice_text|
        Choice.new(text: choice_text)
      end
  end
end
