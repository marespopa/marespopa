-- ========================================================================== --
--                                  SETTINGS                                  --
-- ========================================================================== --
vim.g.mapleader = " "
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.mouse = "a"
vim.opt.termguicolors = true
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
vim.opt.splitbelow = true
vim.opt.splitright = true
-- clipboard is manual via <leader>y and <leader>p

-- ========================================================================== --
--                               PLUGIN MANAGER                               --
-- ========================================================================== --
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.uv.fs_stat(lazypath) then
  vim.fn.system({ "git", "clone", "--filter=blob:none", "https://github.com/folke/lazy.nvim.git", "--branch=stable", lazypath })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
  -- Theme
  { "AlexvZyl/nordic.nvim", priority = 1000, config = function() require('nordic').load() end },
  
  -- UI Upgrade
  {
    "folke/noice.nvim",
    event = "VeryLazy",
    dependencies = { "MunifTanjim/nui.nvim", "rcarriga/nvim-notify" },
    opts = {
      lsp = { override = { ["vim.lsp.util.convert_input_to_markdown_lines"] = true, ["vim.lsp.util.stylize_markdown"] = true } },
      presets = { bottom_search = true, command_palette = true, lsp_doc_border = true },
    },
  },

  -- Motion
  {
    "folke/flash.nvim",
    event = "VeryLazy",
    opts = {},
    keys = {
      { "s", mode = { "n", "x", "o" }, function() require("flash").jump() end, desc = "Flash" },
      { "S", mode = { "n", "x", "o" }, function() require("flash").treesitter() end, desc = "Flash Treesitter" },
    },
  },

  -- Copilot
  {
    "zbirenbaum/copilot.lua",
    cmd = "Copilot",
    event = "InsertEnter",
    config = function()
      require("copilot").setup({
        suggestion = { enabled = true, auto_trigger = true, keymap = { accept = "<M-l>", next = "<M-]>", prev = "<M-[>" } },
      })
    end,
  },
  {
    "CopilotC-Nvim/CopilotChat.nvim",
    branch = "main",
    dependencies = { "zbirenbaum/copilot.lua", "nvim-lua/plenary.nvim" },
    build = "make tiktoken", 
    opts = { model = "gpt-4o", window = { layout = 'float', relative = 'editor', width = 0.45, height = 0.8 } },
    keys = { { "<leader>cc", "<cmd>CopilotChatToggle<cr>", desc = "Toggle Copilot Chat" } },
  },

  -- Core Dev Tools
  { "nvim-treesitter/nvim-treesitter", build = ":TSUpdate" },
  { "neovim/nvim-lspconfig" },
  { "nvim-telescope/telescope.nvim", dependencies = { "nvim-lua/plenary.nvim" } },
  { "nvim-tree/nvim-tree.lua", dependencies = { "nvim-tree/nvim-web-devicons" }, config = true },
})

-- ========================================================================== --
--                                   CONFIG                                   --
-- ========================================================================== --
-- Native LSP + Tailwind Support
vim.lsp.enable({ "vtsls", "pyright", "tailwindcss" })

-- Auto-format on save
vim.api.nvim_create_autocmd("BufWritePre", {
  pattern = { "*.ts", "*.tsx", "*.js", "*.jsx" },
  callback = function() vim.lsp.buf.format({ async = false }) end,
})

-- ========================================================================== --
--                                 KEYBINDINGS                                --
-- ========================================================================== --
local builtin = require("telescope.builtin")

-- General Navigation
vim.keymap.set("n", "<leader>da", ":%d _<CR>", { desc = "Clear All" })
vim.keymap.set("n", "<C-p>", builtin.find_files, {})
vim.keymap.set("n", "<C-b>", ":NvimTreeToggle<CR>", {})
vim.keymap.set("n", "gd", vim.lsp.buf.definition, {})
vim.keymap.set("n", "K", vim.lsp.buf.hover, {})
vim.keymap.set("n", "<leader>x", ":bd<CR>", {})

-- Centered Search Navigation
vim.keymap.set("n", "n", "nzzzv", { desc = "Next match (centered)" })
vim.keymap.set("n", "N", "Nzzzv", { desc = "Prev match (centered)" })

-- System Clipboard (On Demand)
vim.keymap.set({"n", "v"}, "<leader>y", [["+y]], { desc = "Yank to system" })
vim.keymap.set("n", "<leader>Y", [["+Y]], { desc = "Yank line to system" })
vim.keymap.set({"n", "v"}, "<leader>p", [["+p]], { desc = "Paste from system" })

-- Black Hole Deletes
vim.keymap.set({"n", "v"}, "<leader>d", [["_d]], { desc = "Delete into void" })

-- Copilot Chat prompts
vim.keymap.set("n", "<leader>cp", function()
  local actions = require("CopilotChat.actions")
  require("CopilotChat.integrations.telescope").pick(actions.prompt_actions())
end, { desc = "Copilot Chat Actions" })
