# git auto - add, commit with "10 <message>", push origin main
$ErrorActionPreference = "Stop"

function Get-ChangeSummary {
  $names = @(git diff --cached --name-only 2>$null | Where-Object { $_ })
  if (-not $names -or $names.Count -eq 0) {
    return "update project files"
  }

  $joined = ($names -join " ").ToLowerInvariant()
  $parts = @()

  if ($joined -match "sidebar|dictionary|language|i18n") {
    $parts += "improve sidebar and multilingual UI"
  }
  if ($joined -match "portfolio|project|crm|taganeh|cal-afg|car-afg") {
    $parts += "refresh portfolio projects and covers"
  }
  if ($joined -match "git-auto|package\.json") {
    $parts += "add git auto helper"
  }

  if ($parts.Count -gt 0) {
    return ($parts -join "; ")
  }

  if ($names.Count -eq 1) {
    return "update $([IO.Path]::GetFileName($names[0]))"
  }
  if ($names.Count -le 3) {
    $short = $names | ForEach-Object { [IO.Path]::GetFileName($_) }
    return "update $($short -join ', ')"
  }
  return "update $($names.Count) files"
}

$repoRoot = (git rev-parse --show-toplevel 2>$null)
if (-not $repoRoot) {
  Write-Host "Not inside a git repository." -ForegroundColor Red
  exit 1
}

Set-Location $repoRoot

Write-Host "> git add ." -ForegroundColor Cyan
git add .

$staged = @(git diff --cached --name-only 2>$null | Where-Object { $_ })
if (-not $staged -or $staged.Count -eq 0) {
  Write-Host "Nothing to commit. Pushing current branch..." -ForegroundColor Yellow
}
else {
  $summary = Get-ChangeSummary
  $message = "10 $summary"
  Write-Host ("> git commit -m `"{0}`"" -f $message) -ForegroundColor Cyan
  git commit -m $message
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Commit failed." -ForegroundColor Red
    exit 1
  }
}

Write-Host "> git push origin main" -ForegroundColor Cyan
git pull --rebase origin main
if ($LASTEXITCODE -ne 0) {
  Write-Host "Pull rebase failed. Resolve conflicts, then run git auto again." -ForegroundColor Red
  exit 1
}
git push origin main
if ($LASTEXITCODE -ne 0) {
  Write-Host "Push failed." -ForegroundColor Red
  exit 1
}

Write-Host "git auto finished." -ForegroundColor Green
