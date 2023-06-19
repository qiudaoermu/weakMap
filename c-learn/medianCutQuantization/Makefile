CC = clang
CFLAGS = -Wall -Wextra
LDFLAGS = -lcurl

SRCS = main.c
OBJS = $(SRCS:.c=.o)
TARGET = myapp

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(TARGET)
