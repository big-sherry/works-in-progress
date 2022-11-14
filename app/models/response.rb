class Response < ApplicationRecord
    validates :body, presence: true

    belongs_to :user
    belongs_to :prompt
end