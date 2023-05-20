# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "atctheme"
  spec.version       = "0.1.0"
  spec.authors       = ["atctwo"]
  spec.email         = ["atctwopointfive@gmail.com"]

  spec.summary       = "Theme for atctwo's website"
  spec.homepage      = "https://github.com/atctwo/atctheme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3.2"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-archives", "~> 2.2"
end
