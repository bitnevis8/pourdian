# Pourdian git auto: add + commit "10 <msg>" + push origin main
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $root

$mjs = Join-Path $PSScriptRoot 'git-auto.mjs'
if (-not (Test-Path -LiteralPath $mjs)) {
  Write-Host "Missing: $mjs" -ForegroundColor Red
  exit 1
}

$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
  Write-Host "node is not installed or not in PATH." -ForegroundColor Red
  exit 1
}

& node $mjs
exit $LASTEXITCODE
