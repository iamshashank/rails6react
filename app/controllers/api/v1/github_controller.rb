class Api::V1::GithubController < ApplicationController

  require 'octokit'

  def total_repos
    client = git_client
    repo_count = client.repositories.count
    last_5_repo = client.repos({}, query: {type: 'owner', sort: 'desc'}).first(5).map{ |r| {name: r[:name], html_url: r[:html_url], description: r[:description] } }
    organizations = client.organizations.map{ |org| {login: org[:login], url: org[:url], avatar_url: org[:avatar_url], description: org[:description]} }
    render json: { repo_count: repo_count, last_5_repo: last_5_repo, organizations: organizations }
  end

  private
  
  def git_client
    Octokit::Client.new(access_token: ENV['OAUTH_ACCESS_TOKEN'])
  end
end