class Utility

  def self.rarity_generator
    random_number = rand(0..99)
    if (0..49).to_a.include?(random_number)
      return 1
    elsif (50..69).to_a.include?(random_number)
      return 2
    elsif (70..79).to_a.include?(random_number)
      return 3
    elsif (80..84).to_a.include?(random_number)
      return 3
    else
      return 0
    end
  end

end
