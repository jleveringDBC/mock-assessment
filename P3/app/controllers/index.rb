require 'json'

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  #Create and return a JSON object with the random cell and color given below.

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  return_value = {:cell => cell.to_s, "color" => color}.to_json
  return return_value
end
