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

  def list_params
    params.require(:list).permit(:name, choices: [])
  end

end
