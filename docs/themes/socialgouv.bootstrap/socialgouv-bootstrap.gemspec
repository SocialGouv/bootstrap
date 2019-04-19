# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "socialgouv.bootstrap"
  spec.version       = "0.1.0"
  spec.authors       = ["Douglas Duteil"]
  spec.email         = ["douglasduteil@gmail.com"]

  spec.summary       = "SocialGouv Bootstrap Jekyll Theme"
  spec.homepage      = "https://socialgouv.github.io/bootstrap/design"
  spec.license       = "APACHE-2"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
end
