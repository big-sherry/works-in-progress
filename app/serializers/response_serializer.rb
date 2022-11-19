class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :body, :section, :created_at

  belongs_to :user
  belongs_to :prompt
end
