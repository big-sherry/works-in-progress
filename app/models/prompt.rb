class Prompt < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true

    has_many :responses
end