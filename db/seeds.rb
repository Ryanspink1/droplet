require 'csv'

class Seed
  def self.start
    State.destroy_all
    seed = Seed.new
    seed.generate_states
  end

  def generate_states
    CSV.foreach("./db/data/state_table.csv", :headers => true, header_converters: :symbol) do |row|
      State.create!(name:         row[:name],
                    abbreviation: row[:abbreviation])
    end
    puts "Seeded!"
  end
end
