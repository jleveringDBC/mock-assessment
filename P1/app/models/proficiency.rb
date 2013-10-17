class Proficiency < ActiveRecord::Base
  belongs_to :user
  belongs_to :skill

  validates_inclusion_of :formal_education, :in => [true, false]
end
