class Response < ApplicationRecord
    validates :body, presence: true, length: { minimum: 50, maximum: 500 }
    validates :section, presence: true

    belongs_to :user
    belongs_to :prompt
end