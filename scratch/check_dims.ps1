Add-Type -AssemblyName System.Drawing
Get-ChildItem -Path scratch\candidates\*.jpg | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    $w = $img.Width
    $h = $img.Height
    $ar = [math]::Round($w / $h, 2)
    $sz = [math]::Round($_.Length / 1KB, 1)
    $img.Dispose()
    [PSCustomObject]@{
        Name = $_.Name
        Width = $w
        Height = $h
        AspectRatio = $ar
        SizeKB = $sz
    }
} | Format-Table -AutoSize
