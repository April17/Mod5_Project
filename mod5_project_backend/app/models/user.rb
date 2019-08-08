class User < ApplicationRecord
  has_many :characters

  has_secure_password

  validates :username, uniqueness: true
end
