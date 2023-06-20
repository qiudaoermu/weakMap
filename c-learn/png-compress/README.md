`Compress png with libpng`

## Install

```
brew install libpng
```

Makefile 配置 libpng path

```
CFLAGS =  -I/usr/local/Cellar/libpng/1.6.39/include/
LDFLAGS =  -L/usr/local/Cellar/libpng/1.6.39/lib/ -lpng
```

include path：

/usr/local/Cellar/libpng/1.6.39/include/

lib path：

usr/local/Cellar/libpng/1.6.39/lib/

## Build

```
make
```

## Use

```
cd bin
./compress_png input.png output.png
```
