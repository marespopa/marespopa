-- ========================================================================== --
--                             TERMUX NVIM SETUP                              --
-- ========================================================================== --
local tmpdir = vim.fn.expand("$PREFIX/tmp")
if vim.fn.isdirectory(tmpdir) == 0 then vim.fn.mkdir(tmpdir, "p") end
vim.env.TMPDIR = tmpdir
vim.env.XDG_RUNTIME_DIR = tmpdir

-- ========================================================================== --
--                                  SETTINGS                                  --
-- ========================================================================== --
vim.g.mapleader = " "
vim.opt.number = true
vim.opt.mouse = "a"
vim.opt.termguicolors = true
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
vim.opt.undofile = true
vim.opt.clipboard = "" 

-- ========================================================================== --
--                               PLUGIN MANAGER                               --
-- ========================================================================== --
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.uv.fs_stat(lazypath) then
  vim.fn.system({ "git", "clone", "--filter=blob:none", "https://github.com/folke/lazy.nvim.git", "--branch=stable", lazypath })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
  { "AlexvZyl/nordic.nvim", priority = 1000, config = function() require('nordic').load() end },
  { 
    "folke/noice.nvim", 
    event = "VeryLazy", 
    dependencies = { "MunifTanjim/nui.nvim", "rcarriga/nvim-notify" }, 
    opts = { presets = { bottom_search = true, command_palette = true, lsp_doc_border = true } },
  },
  { "lewis6991/gitsigns.nvim", opts = {} },
  { "folke/flash.nvim", event = "VeryLazy", opts = {} },

  -- AI 1: Copilot Core
  { 
    "zbirenbaum/copilot.lua", 
    cmd = "Copilot", 
    event = "InsertEnter", 
    config = function() 
      require("copilot").setup({ 
        suggestion = { enabled = true, auto_trigger = true, keymap = { accept = "<M-l>" } },
      }) 
    end,
  },

  -- AI 2: Avante.nvim (March 2026 Schema)
  {
    "yetone/avante.nvim",
    event = "VeryLazy",
    build = "make", 
    opts = {
      provider = "copilot",
      providers = {
        copilot = {
          endpoint = "https://api.githubcopilot.com",
          model = "gpt-codex-5.3", 
          timeout = 30000,
        },
      },
      behaviour = {
        auto_suggestions = false, 
        minimal_diff = true,      
      },
      mappings = {
        submit = { insert = "<C-s>", normal = "<CR>" },
      },
    },
    dependencies = {
      "nvim-treesitter/nvim-treesitter",
      "stevearc/dressing.nvim",
      "MunifTanjim/nui.nvim",
      "zbirenbaum/copilot.lua",
    },
  },

  -- AI 3: Copilot Chat
  { 
    "CopilotC-Nvim/CopilotChat.nvim", 
    branch = "main", 
    dependencies = { "zbirenbaum/copilot.lua", "nvim-lua/plenary.nvim" }, 
    build = "make tiktoken",
    opts = { 
      model = "gpt-codes-5.3", 
      window = { layout = 'vertical', width = 0.4, border = 'rounded' },
    },
    keys = { 
      { "<leader>cc", "<cmd>CopilotChatToggle<cr>", desc = "Toggle Copilot Chat" },
    },
  },

  { "nvim-treesitter/nvim-treesitter", build = ":TSUpdate" },
  { "neovim/nvim-lspconfig" }, 
  { "nvim-telescope/telescope.nvim", dependencies = { "nvim-lua/plenary.nvim" } },
  { "nvim-tree/nvim-tree.lua", config = true },
})

-- ========================================================================== --
--                                KEYBINDINGS                                 --
-- ========================================================================== --
-- LSP & General
vim.keymap.set("n", "<C-b>", ":NvimTreeToggle<CR>")
vim.keymap.set("n", "gd", vim.lsp.buf.definition)
vim.keymap.set("n", "K", vim.lsp.buf.hover)

-- 📋 ON-DEMAND SYSTEM CLIPBOARD (The Fix)
-- Use <leader>y to yank to system, <leader>p to paste from system
vim.keymap.set({"n", "v"}, "<leader>y", '"+y', { desc = "Yank to System Clipboard" })
vim.keymap.set("n", "<leader>Y", '"+Y', { desc = "Yank line to System Clipboard" })
vim.keymap.set({"n", "v"}, "<leader>p", '"+p', { desc = "Paste from System Clipboard" })

-- 🚀 REPLACE ALL (Kept from before)
vim.keymap.set("n", "<leader>ra", "ggVGd\"+p", { desc = "Replace all with Clipboard" })

-- Telescope & AI
local builtin = require('telescope.builtin')
vim.keymap.set("n", "<leader>ff", builtin.find_files)
vim.keymap.set("n", "<leader>fg", builtin.live_grep)
vim.keymap.set("n", "<leader>aa", "<cmd>AvanteAsk<CR>")
