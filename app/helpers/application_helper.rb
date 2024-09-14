module ApplicationHelper


  def current_week_number()
    Time.now.strftime("%V").to_i
  end

  def border_line_colour(date)
    if date == Date.today
   	  return "5px solid #28d094 !important"	
   	else
   	  return ""	
   	end  	
  end

end
