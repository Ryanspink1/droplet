module ApplicationHelper

  def fingerprint(data)
    Digest::MD5.digest(data.to_json)
  end

  def json_fingerprint(data)
    Digest::MD5.digest(data.to_s)
  end
end
