defmodule PdscServerWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :pdsc_server

  socket "/socket", PdscServerWeb.UserSocket,
    websocket: [timeout: 45_000],  
    # websocket: true,
    longpoll: false

  # Serve at "/" the static files from "priv/static" directory.
  #
  # You should set gzip to true if you are running phx.digest
  # when deploying your static files in production.
  plug Plug.Static,
    at: "/",
    from: :pdsc_server,
    gzip: false,
    only: ~w(css fonts images vue js favicon.ico robots.txt)

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
    plug Phoenix.LiveReloader
    plug Phoenix.CodeReloader
  end

  plug Plug.RequestId
  plug Plug.Logger

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Phoenix.json_library()

  plug Plug.MethodOverride
  plug Plug.Head

  # The session will be stored in the cookie and signed,
  # this means its contents can be read but not tampered with.
  # Set :encryption_salt if you would also like to encrypt it.
  plug Plug.Session,
    store: :cookie,
    key: "_pdsc_server_key",
    signing_salt: "uY7m1ijM"

  # ADD el enchufe de la nueva dependencia
  plug CORSPlug, origin: "*"


  plug PdscServerWeb.Router
end
