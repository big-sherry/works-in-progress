class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :title, :body

  belongs_to :user
  belongs_to :prompt
end
