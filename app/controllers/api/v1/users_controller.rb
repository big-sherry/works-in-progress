class Api::V1::UsersController < ApiController
    def index
        if current_user
            render json: User.find(current_user.id)
        else
            render json: { user: nil }
        end
    end
end