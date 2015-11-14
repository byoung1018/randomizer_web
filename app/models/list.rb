class List < ActiveRecord::Base
  belongs_to :owner, class_name: 'User'
  has_many :list_items
  has_many :choices, through: :list_items
end
