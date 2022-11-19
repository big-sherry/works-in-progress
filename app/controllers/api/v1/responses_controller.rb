class Api::V1::ResponsesController < ApiController
    def create
        response = Response.new(response_params)
        prompt = Prompt.find(params[:prompt_id])
        response.prompt = prompt
        response.user = current_user
        
        if response.save
            render json: response
        else 
            render json: { errors: response.errors.full_messages.to_sentence }
        end
    end

    private
    def response_params
        params.require(:response).permit(:body, :section)
    end
end