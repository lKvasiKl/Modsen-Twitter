// vite.config.ts
import { defineConfig } from "file:///D:/0_Modsen/Internship/Modsen-Twitter/node_modules/vite/dist/node/index.js";
import babel from "file:///D:/0_Modsen/Internship/Modsen-Twitter/node_modules/vite-plugin-babel/dist/index.mjs";
import react from "file:///D:/0_Modsen/Internship/Modsen-Twitter/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), babel()],
  server: {
    port: 3e3
  },
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      constants: "/src/constants",
      firebase: "/src/firebase",
      layouts: "/src/layouts",
      pages: "/src/pages",
      store: "/src/store",
      types: "/src/types",
      utils: "/src/utils"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwwX01vZHNlblxcXFxJbnRlcm5zaGlwXFxcXE1vZHNlbi1Ud2l0dGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwwX01vZHNlblxcXFxJbnRlcm5zaGlwXFxcXE1vZHNlbi1Ud2l0dGVyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8wX01vZHNlbi9JbnRlcm5zaGlwL01vZHNlbi1Ud2l0dGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IGJhYmVsIGZyb20gXCJ2aXRlLXBsdWdpbi1iYWJlbFwiO1xyXG5cclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgYmFiZWwoKV0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgYXNzZXRzOiBcIi9zcmMvYXNzZXRzXCIsXHJcbiAgICAgIGNvbXBvbmVudHM6IFwiL3NyYy9jb21wb25lbnRzXCIsXHJcbiAgICAgIGNvbnN0YW50czogXCIvc3JjL2NvbnN0YW50c1wiLFxyXG4gICAgICBmaXJlYmFzZTogXCIvc3JjL2ZpcmViYXNlXCIsXHJcbiAgICAgIGxheW91dHM6IFwiL3NyYy9sYXlvdXRzXCIsXHJcbiAgICAgIHBhZ2VzOiBcIi9zcmMvcGFnZXNcIixcclxuICAgICAgc3RvcmU6IFwiL3NyYy9zdG9yZVwiLFxyXG4gICAgICB0eXBlczogXCIvc3JjL3R5cGVzXCIsXHJcbiAgICAgIHV0aWxzOiBcIi9zcmMvdXRpbHNcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVMsU0FBUyxvQkFBb0I7QUFDdFUsT0FBTyxXQUFXO0FBRWxCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
