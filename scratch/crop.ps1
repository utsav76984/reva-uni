Add-Type -AssemblyName System.Drawing
$filePath = 'C:\Users\Magesture\Downloads\REVA RACE Technology Academy Homepage.png'
$img = [System.Drawing.Image]::FromFile($filePath)
Write-Host "Width: $($img.Width) Height: $($img.Height)"
$yStart = [int]($img.Height * 0.32)
$yEnd = [int]($img.Height * 0.48)
$height = $yEnd - $yStart
$rect = New-Object System.Drawing.Rectangle(0, $yStart, $img.Width, $height)
$bmp = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)
$g.DrawImage($img, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$bmp.Save('e:\utsav\reva-uni\scratch\career-section-ref.png')
$bmp.Dispose()
$img.Dispose()
Write-Host "Cropped successfully"
