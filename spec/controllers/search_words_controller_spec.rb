require 'rails_helper'

describe SearchWordsController do
  describe 'GET #favorite' do
    it "@favoriteは期待した値か？" do
      test = FactoryBot.create(:favorite)
      get :favorite
      expect(assigns(:favorite)[0]).to eq test
    end
    it "renders the :favorite template" do
      get :favorite
      expect(response).to render_template :favorite
    end
  end
  
  describe 'GET #index' do
    
    context "NGKeywordがない場合、デフォルト値を反映する" do
      let(:instance) {SearchWord.new}
      xit 'No NGKeyword' do
        @default_params = { NGKeyword: "NGKeyword", postageFlag: 0, sort: "standard" }
        @params = { keyword: "testWord", NGKeyword: "", genreId: "1", postageFlag: "", sort: "", page: 1 }
        test = @params.merge(@default_params)
        
        get :index, params: { keyword: "testWord", NGKeyword: "", genreId: "1", postageFlag: "", sort: "" }
        # subject {instance.send(:searchRequest, 1)}
        # binding.pry
        expect(response).to eq test
      end
    end
    it "renders the :index template" do
      get :index
      expect(response).to render_template :index
    end
  end
end