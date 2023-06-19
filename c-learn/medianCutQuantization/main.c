#include <stdio.h>

// 定义RGB颜色结构体
typedef struct {
    unsigned char red;
    unsigned char green;
    unsigned char blue;
} RGBColor;

// 定义颜色空间范围结构体
typedef struct {
    int start;
    int end;
} ColorRange;

// 定义最大颜色数量
#define numColors 6

// 计算颜色空间的中间值
RGBColor computeMedianColor(RGBColor* image, ColorRange range) {
    // 计算颜色空间的中间索引
    int medianIndex = range.start + (range.end - range.start) / 2;

    // 返回中间索引对应的颜色值
    return image[medianIndex];
}

// 划分颜色空间
void splitColorSpace(RGBColor* image, ColorRange range, RGBColor* palette, int paletteIndex) {
    // 如果颜色空间范围内的颜色数量小于等于最大颜色数量，直接将颜色范围内的颜色添加到调色板中
    if (range.end - range.start + 1 <= numColors) {
        for (int i = range.start; i <= range.end; i++) {
            palette[paletteIndex++] = image[i];
        }
    } else {
        // 否则，计算颜色空间的中间颜色，并将其添加到调色板中
        RGBColor medianColor = computeMedianColor(image, range);
        palette[paletteIndex] = medianColor;

        // 划分颜色空间为左右两部分，并递归处理
        ColorRange leftRange;
        leftRange.start = range.start;
        leftRange.end = range.start + (range.end - range.start) / 2;
        splitColorSpace(image, leftRange, palette, paletteIndex * 2 + 1);

        ColorRange rightRange;
        rightRange.start = leftRange.end + 1;  // 更新右侧颜色范围的起始索引
        rightRange.end = range.end;
        splitColorSpace(image, rightRange, palette, paletteIndex * 2 + 2);
    }
}

int main() {
    // 假设有一张图像，存储为RGBColor数组
    RGBColor image[] = {
        {100, 50, 200},   // 像素1
        {80, 120, 30},    // 像素2
        {150, 90, 70},    // 像素3
        {40, 200, 100},   // 像素4
        // 更多像素...
    };

    int numPixels = sizeof(image) / sizeof(RGBColor);

    // 创建调色板，用于存储压缩后的颜色
    RGBColor palette[numColors];

    // 定义颜色空间范围
    ColorRange range;
    range.start = 0;
    range.end = numPixels - 1;

    // 执行Median Cut Quantization算法，获取压缩后的调色板
    splitColorSpace(image, range, palette, 0);

    // 打印压缩后的调色板
    printf("Compressed palette:\n");
    for (int i = 0; i < numColors; i++) {
        printf("Color %d: R=%d, G=%d, B=%d\n", i + 1, palette[i].red, palette[i].green, palette[i].blue);
    }

    return 0;
}
