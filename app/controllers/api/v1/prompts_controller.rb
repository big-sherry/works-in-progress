class Api::V1::PromptsController < ApiController
    def index
        render json: Prompt.all
    end
    def show
        render json: Prompt.find(params[:id]), serializer: PromptShowSerializer, include: ['responses.user']
    end
end