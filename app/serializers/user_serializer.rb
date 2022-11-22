class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_pic

  has_many :responses
end
