class Blog < ApplicationRecord
  belongs_to :user
  has_many :posts, dependent: :destroy
  validates :title, :category, presence: true
end
