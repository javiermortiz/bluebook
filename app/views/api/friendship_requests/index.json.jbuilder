@friendship_requests.each do |request|
    json.set! request.id do
        json.extract! request, :id, :status, :started_by_user_id, :waiting_for_user_id
    end 
end 