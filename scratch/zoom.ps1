Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('e:\utsav\reva-uni\scratch\career-section-ref.png')
$rect = New-Object System.Drawing.Rectangle(190, 75, 800, 160)
$bmp = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$dest = New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)
$g.DrawImage($img, $dest, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$bmp.Save('e:\utsav\reva-uni\scratch\cards-zoom.png')
$bmp.Dispose()
$img.Dispose()
Write-Host "Zoom saved"
