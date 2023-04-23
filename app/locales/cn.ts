import { SubmitKey } from '@/app/store';

const cn = {
    WIP: '该功能仍在开发中……',
    Error: {
        Unauthorized: '现在是未授权状态，请点击左下角设置按钮输入访问密码。',
    },
    ChatItem: {
        ChatItemCount: (count: number) => `${count} 条对话`,
    },
    Chat: {
        SubTitle: (count: number) => `与 ChatGPT 的 ${count} 条对话`,
        Actions: {
            ChatList: '查看消息列表',
            CompressedHistory: '查看压缩后的历史 Prompt',
            Export: '导出聊天记录',
            Copy: '复制',
            Stop: '停止',
            Retry: '重试',
            Delete: '删除',
        },
        Rename: '重命名对话',
        Typing: '正在输入…',
        Input: (submitKey: string) => {
            var inputHints = `${submitKey} 发送`;
            if (submitKey === String(SubmitKey.Enter)) {
                inputHints += '，Shift + Enter 换行';
            }
            return inputHints + '，/ 触发补全';
        },
        Send: '发送',
    },
    Export: {
        Title: '导出聊天记录为 Markdown',
        Copy: '全部复制',
        Download: '下载文件',
        MessageFromYou: '来自你的消息',
        MessageFromChatGPT: '来自 ChatGPT 的消息',
    },
    Memory: {
        Title: '历史记忆',
        EmptyContent: '尚未记忆',
        Send: '发送记忆',
        Copy: '复制记忆',
        Reset: '重置对话',
        ResetConfirm: '重置后将清空当前对话记录以及历史记忆，确认重置？',
    },
    Home: {
        NewChat: '新的聊天',
        DeleteChat: '确认删除选中的对话？',
        DeleteToast: '已删除会话',
        Revert: '撤销',
    },
    Settings: {
        Title: '设置',
        SubTitle: '设置选项',
        Actions: {
            ClearAll: '清除所有数据',
            ResetAll: '重置所有选项',
            Close: '关闭',
            ConfirmResetAll: {
                Confirm: '您确定要重置所有配置吗？',
            },
            ConfirmClearAll: {
                Confirm: '您确定要清除所有数据吗？',
            },
        },
        Lang: {
            Name: 'Language',
            Options: {
                cn: '简体中文',
                en: 'English',
                tw: '繁體中文',
                es: 'Español',
                it: 'Italiano',
                tr: 'Türkçe',
                jp: '日本語',
                de: 'Deutsch',
            },
        },
        Avatar: '头像',
        FontSize: {
            Title: '字体大小',
            SubTitle: '聊天内容的字体大小',
        },
        SendKey: '发送键',
        Theme: '主题',
        TightBorder: '无边框模式',
        SendPreviewBubble: '发送预览气泡',
        Prompt: {
            Disable: {
                Title: '禁用提示词自动补全',
                SubTitle: '在输入框开头输入 / 即可触发自动补全',
            },
            List: '自定义提示词列表',
            ListCount: (builtin: number, custom: number) =>
                `内置 ${builtin} 条，用户定义 ${custom} 条`,
            Edit: '编辑',
        },
        HistoryCount: {
            Title: '附带历史消息数',
            SubTitle: '每次请求携带的历史消息数',
        },
        CompressThreshold: {
            Title: '历史消息长度压缩阈值',
            SubTitle: '当未压缩的历史消息超过该值时，将进行压缩',
        },
        Token: {
            Title: 'API Key',
            SubTitle: '使用自己的 Key 可绕过密码访问限制',
            Placeholder: 'OpenAI API Key',
        },
        Usage: {
            Title: '余额查询',
            SubTitle(used: any, total: any) {
                return `本月已使用 $${used}，订阅总额 $${total}`;
            },
            IsChecking: '正在检查…',
            Check: '重新检查',
            NoAccess: '输入 API Key 或访问密码查看余额',
        },
        AccessCode: {
            Title: '访问密码',
            SubTitle: '已开启加密访问',
            Placeholder: '请输入访问密码',
        },
        Model: '模型 (model)',
        Temperature: {
            Title: '随机性 (temperature)',
            SubTitle: '值越大，回复越随机，大于 1 的值可能会导致乱码',
        },
        MaxTokens: {
            Title: '单次回复限制 (max_tokens)',
            SubTitle: '单次交互所用的最大 Token 数',
        },
        PresencePenlty: {
            Title: '话题新鲜度 (presence_penalty)',
            SubTitle: '值越大，越有可能扩展到新话题',
        },
    },
    Store: {
        DefaultTopic: '新的聊天',
        BotHello:
            "欢迎使用 Panda's ChatGPT，扫描下方二维码关注公众号：Panda 的日常，回复 授权码 获取授权码，在设置中输入授权码后解锁使用。\n" +
            '\n' +
            '![Panda 的日常](/wechat.png) ' +
            '\n\n重要： 由于 api 限制，因此每人限制 10 次使用，如果想获取更多使用次数，维持服务器及域名的服务，可以扫描下方二维码付费支持下，10 块钱 50 次\n' +
            '\n![支付宝](/ali_pay.PNG) ![微信](/wechat_pay.png)\n' +
            '\n' +
            '\n 如果想免费试用，点击这里获得账号 [KEY](https://platform.openai.com) 后，在设置中输入 API key 即可免费使用\n' +
            '\n卡顿或无响应？可能是人太多了\n',
        Error: '出错了，稍后重试吧',
        Prompt: {
            History: (content: string) =>
                '这是 ai 和用户的历史聊天总结作为前情提要：' + content,
            Topic: '使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要多余文本，如果没有主题，请直接返回“闲聊”',
            Summarize:
                '简要总结一下你和用户的对话，用作后续的上下文提示 prompt，控制在 200 字以内',
        },
        ConfirmClearAll: '确认清除所有聊天、设置数据？',
    },
    Copy: {
        Success: '已写入剪切板',
        Failed: '复制失败，请赋予剪切板权限',
    },
    Context: {
        Toast: (x: any) => `已设置 ${x} 条前置上下文`,
        Edit: '前置上下文和历史记忆',
        Add: '新增一条',
    },
};

export type LocaleType = typeof cn;

export default cn;
