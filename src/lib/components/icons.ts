import type { Component } from 'svelte';
import ArmChair from '@lucide/svelte/icons/armchair';
import ArrowRight from '@lucide/svelte/icons/arrow-right';
import BookOpen from '@lucide/svelte/icons/book-open';
import Bug from '@lucide/svelte/icons/bug';
import Bus from '@lucide/svelte/icons/bus';
import CakeSlice from '@lucide/svelte/icons/cake-slice';
import ChevronLeft from '@lucide/svelte/icons/chevron-left';
import ChevronRight from '@lucide/svelte/icons/chevron-right';
import Clock from '@lucide/svelte/icons/clock';
import Download from '@lucide/svelte/icons/download';
import ExternalLink from '@lucide/svelte/icons/external-link';
import FileSpreadsheet from '@lucide/svelte/icons/file-spreadsheet';
import FileText from '@lucide/svelte/icons/file-text';
import Fish from '@lucide/svelte/icons/fish';
import Heart from '@lucide/svelte/icons/heart';
import Info from '@lucide/svelte/icons/info';
import Landmark from '@lucide/svelte/icons/landmark';
import Mail from '@lucide/svelte/icons/mail';
import Menu from '@lucide/svelte/icons/menu';
import MessageCircle from '@lucide/svelte/icons/message-circle';
import Music from '@lucide/svelte/icons/music';
import Palette from '@lucide/svelte/icons/palette';
import PartyPopper from '@lucide/svelte/icons/party-popper';
import Shirt from '@lucide/svelte/icons/shirt';
import ShoppingBag from '@lucide/svelte/icons/shopping-bag';
import Ticket from '@lucide/svelte/icons/ticket';
import Trees from '@lucide/svelte/icons/trees';
import Users from '@lucide/svelte/icons/users';
import X from '@lucide/svelte/icons/x';
import FacebookIcon from './FacebookIcon.svelte';

type IconComponent = Component<{ size?: number; color?: string }>;

/** Every icon the site can show, by the name content uses to ask for it. */
export const icons = {
	armchair: ArmChair,
	'arrow-right': ArrowRight,
	'book-open': BookOpen,
	bug: Bug,
	bus: Bus,
	'cake-slice': CakeSlice,
	'chevron-left': ChevronLeft,
	'chevron-right': ChevronRight,
	clock: Clock,
	download: Download,
	'external-link': ExternalLink,
	facebook: FacebookIcon,
	'file-spreadsheet': FileSpreadsheet,
	'file-text': FileText,
	fish: Fish,
	heart: Heart,
	info: Info,
	landmark: Landmark,
	mail: Mail,
	menu: Menu,
	'message-circle': MessageCircle,
	music: Music,
	palette: Palette,
	'party-popper': PartyPopper,
	shirt: Shirt,
	'shopping-bag': ShoppingBag,
	ticket: Ticket,
	trees: Trees,
	users: Users,
	x: X
} satisfies Record<string, IconComponent>;

export type IconName = keyof typeof icons;
