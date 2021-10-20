class Post < ApplicationRecord
  belongs_to :blog
  validates :title, :author, :body, presence: true
end
