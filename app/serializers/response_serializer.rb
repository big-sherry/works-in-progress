class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :body

  belongs_to :user
  belongs_to :prompt
end
