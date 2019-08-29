class User < ApplicationRecord
  has_many :characters, :dependent => :destroy

  has_secure_password

  validates :username, uniqueness: true
  validates :username, presence: true
  validates :name, presence: true
  validates :password, presence: true
  validates :password, confirmation: { case_sensitive: true }
end
