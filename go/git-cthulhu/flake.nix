{
  inputs =
  {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }: 
  let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in
  {
    devShells.${system}.default = pkgs.mkShell 
    {
      packages = with pkgs; [
        go
        gopls
        entr
        just
      ];

      shellHook = ''
        export GOPATH="$XDG_DATA_HOME"/go
        go version | ${pkgs.cowsay}/bin/cowsay | ${pkgs.lolcat}/bin/lolcat
      '';
    };
  };
}
