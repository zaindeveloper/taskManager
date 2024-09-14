class Task < ApplicationRecord

  belongs_to :user
  scope :from_date, -> date_value {where("tasks.start_time >= ?" , "#{date_value} 00:00")}
  scope :to_date, -> date_value {where("tasks.start_time <= ?" , "#{date_value} 23:59")}

  validates :title,    presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validate :start_date_must_be_greater_than_end_date

  def start_date_must_be_greater_than_end_date
    if self.start_time > self.end_time
      self.errors.add(:base, "Start time must be greater than end time")
    end 
  end

  def total_worked_time
    total_hour = (self.end_time) - (self.start_time)
    seconds = total_hour % 60
    minutes = ((total_hour / 60) % 60).round(0)
    hours = total_hour / (60 * 60)
    return format("%02dh %02dm", hours, minutes) #=> "01:00:00"
  end

end