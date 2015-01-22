require 'pry'
class Prime
  def self.nth(n)
    primes = []
    until primes[-1] >= n
      numbers = (2..100000).to_a
      first = numbers[0]
      while numbers.length > 0
        primes << first
        numbers.delete(first)
        numbers.each do |n|
          if n % first == 0
            numbers.delete(n)
          end
        end
        first = numbers[0]
      end
      primes
    end
    primes.last
  end
end

puts Prime.nth(100)
