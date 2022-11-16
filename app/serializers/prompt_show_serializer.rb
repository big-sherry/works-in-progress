class PromptShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :body

  has_many :responses
end
