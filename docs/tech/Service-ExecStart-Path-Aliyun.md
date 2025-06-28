# 解決 Aliyun ECS 自定義 Service 的 ExecStart 路徑失效問題

在每次重啟 terminal 後，ExecStart 的路徑會失效。正常情況下，使用 `which npm` 或 `which node` 會輸出一個包含大量數字的臨時路徑。雖然這次可以運行，但下次則會失效。

## 解決方法

在 `/usr/bin` 目錄下創建一個絕對路徑的符號鏈接，使用以下命令：

```bash
sudo ln -s $(which node) /usr/bin/node